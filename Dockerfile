FROM php:7.4-apache

# Use the default production configuration
RUN cp "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"

# INstall the Apache config for the site
COPY ./httpd.conf /etc/apache2/sites-available/codetriangle.conf

# Enable Apache modules and the site
RUN a2enmod rewrite expires headers
RUN a2ensite codetriangle
RUN a2dissite 000-default
