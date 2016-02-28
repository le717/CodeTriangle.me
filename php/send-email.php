<?php
  /**
   * @private
   * Check if the text is empty.

   * @param  string $text.
   * @return boolean true if not empty, false otherwise.
   */
  function _isNotEmpty($text) {
    return (bool) !preg_match('/^\s*$/', $text);
  }

  /**
   * @private
   * Validate the entered email.

   * @param  string $email
   * @return boolean true if valid, false otherwise.
   */
  function _isEmail($email) {
    return (bool) filter_var($email, FILTER_VALIDATE_EMAIL);
  }

  /**
   * @private
   * Populate the email template and send it.

   * @param  array.<String:email, String:name, String:body> $details
   *         Array containing necessary details to compose the email.
   * @return boolean Same return values as `mail()`.
   */
  function _sendEmail($details) {
    // Get email details
    $sender = json_decode(file_get_contents('email.json'), true);

    // Construct the email header
    $header  = "MIME-Version: 1.0\r\n";
    $header .= "Content-type: text/html; charset=UTF-8\r\n";
    $header .= "To: {$sender['to']}\r\n";
    $header .= "From: {$sender['name']} <{$sender['from']}>\r\n";

    // Construct the email body
    $body = "<p>You have recieved a new message from {$details['name']} (<strong>{$details['email']}</strong>).
             Here is the message:</p><p>{$details['message']}</p>";

    return mail('',"{$sender['subject']}", $body, $header);
  }

  /**
   * Remove and sanitize any dangerous/unwanted text from the input field.
   *
   * @param  string $txt Text to clean.
   * @return string Cleaned text.
   */
  function spamScrubber($txt) {
    // Very bad values
    $veryBad = ['to:', 'bcc:', 'cc:', 'content-type:',
                'mime-version:', 'multipart-mixed:',
                'content-transfer-encoding:'];

    // Remove any very bad strings
    $txt = str_replace($veryBad, '', $txt);
    return trim(strip_tags($txt));
  }

  function validate($field, $value) {
    $result = null;
    // Clean the text
    $value = spamScrubber($value);

    // Define the validators for each field
    $validators = [
      'name'    => '_isNotEmpty',
      'email'   => '_isEmail',
      'message' => '_isNotEmpty'
    ];

    // Validate the field using the proper method
    if (array_key_exists($field, $validators) === true) {
      $result = $validators[$field]($value);
    }
    return $result;
  }

  function validateAll($fields) {
    // Validate all the fields
    $result = [];
    foreach ($fields as $key => $value) {
      $result[$key] = validate($key, $value);
    }

    // If all the fields were validated, the sum of the results array
    // will be the same as the number of fields we checked
    return array_sum($result) === count($fields);
  }

  /**
   * Get the AJAX data and parse it as JSON.
   *
   * @return array The JSON data sent.
   */
  function getAjaxData() {
    return json_decode(file_get_contents('php://input'), true);
  }

  // Only process the page on POST
  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = getAjaxData();
    $result['valid'] = false;

    // We did not get any request data
    if ($data === null) {
      die();
    }

    // Validate the field value given
    if ($data['action'] === 'validate') {

      // It's valid
      if (validate($data['field'], $data['value'])) {
        $result['valid'] = true;
      }
      echo json_encode($result);

      // Submit the form
    } elseif ($data['action'] === 'submit') {

      // Bot check ;)
      if ($data['value']['bot'] === true) {
        die();
      }

      // Remove the bot field, as it is now useless
      unset($data['value']['bot']);

      // Validate all the fields
      if (validateAll($data['value'])) {

        // Send the email
        $result['valid'] = true;
        _sendEmail($data['value']);
      }
      echo json_encode($result);
    }
  }

die();
