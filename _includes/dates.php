<?php
  $ctme_now = new DateTime('now', new DateTimeZone('UTC'));
  $ctme_myAge = $ctme_now->diff(new DateTime('1995-03-13'))->y;
  $ctme_yrsCoding = $ctme_now->diff(new DateTime('2013-00-26'))->y;
