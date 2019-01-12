FROM php:7.3-apache

# Use the default production configuration
RUN cp "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"

# Enable Apache modules
RUN a2enmod rewrite expires headers
