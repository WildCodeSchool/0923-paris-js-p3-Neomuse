create table
    items (
        id int unsigned primary key auto_increment not null,
        title varchar(255) not null
    );

SET @OLD_UNIQUE_CHECKS = @ @UNIQUE_CHECKS, UNIQUE_CHECKS = 0;

SET
    @OLD_FOREIGN_KEY_CHECKS = @ @FOREIGN_KEY_CHECKS,
    FOREIGN_KEY_CHECKS = 0;

SET
    @OLD_SQL_MODE = @ @SQL_MODE,
    SQL_MODE = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8;

USE `mydb`;

-- -----------------------------------------------------
-- Table `mydb`.`artists`
-- -----------------------------------------------------
CREATE TABLE
    IF NOT EXISTS `mydb`.`artists` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `artist_name` VARCHAR(255) NOT NULL,
        `firstname` VARCHAR(255) NOT NULL,
        `lastname` VARCHAR(255) NOT NULL,
        `date_registration` DATETIME NOT NULL,
        `thumbnail` TEXT NOT NULL,
        `biography` VARCHAR(255) NOT NULL,
        PRIMARY KEY (`id`)
    );

-- -----------------------------------------------------
-- Table `mydb`.`events`
-- -----------------------------------------------------
CREATE TABLE
    IF NOT EXISTS `mydb`.`events` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `name` VARCHAR(255) NOT NULL,
        `date` DATETIME NOT NULL,
        `localisation` VARCHAR(255) NOT NULL,
        PRIMARY KEY (`id`)
    );

-- -----------------------------------------------------
-- Table `mydb`.`sub_technique`
-- -----------------------------------------------------
CREATE TABLE
    IF NOT EXISTS `mydb`.`sub_technique` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `name` VARCHAR(255) NOT NULL,
        PRIMARY KEY (`id`),
        UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE
    );

-- -----------------------------------------------------
-- Table `mydb`.`artwork_technique`
-- -----------------------------------------------------
CREATE TABLE
    IF NOT EXISTS `mydb`.`artwork_technique` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `name` VARCHAR(255) NOT NULL,
        `sub_technique_id` INT NOT NULL,
        PRIMARY KEY (`id`),
        INDEX `fk_artwork_technique_sub_technique1_idx` (`sub_technique_id` ASC) VISIBLE,
        CONSTRAINT `fk_artwork_technique_sub_technique1` FOREIGN KEY (`sub_technique_id`) REFERENCES `mydb`.`sub_technique` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
    );

-- -----------------------------------------------------
-- Table `mydb`.`users`
-- -----------------------------------------------------
CREATE TABLE
    IF NOT EXISTS `mydb`.`users` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `firstname` VARCHAR(255) NOT NULL,
        `lastname` VARCHAR(255) NOT NULL,
        `email` VARCHAR(255) NOT NULL,
        `phone` INT NOT NULL,
        `adress` VARCHAR(255) NOT NULL,
        `password` VARCHAR(255) NOT NULL,
        `role` ENUM("user", "admin") NOT NULL,
        PRIMARY KEY (`id`),
        UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
        UNIQUE INDEX `phone_UNIQUE` (`phone` ASC) VISIBLE
    );

-- -----------------------------------------------------
-- Table `mydb`.`artworks`
-- -----------------------------------------------------
CREATE TABLE
    IF NOT EXISTS `mydb`.`artworks` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `title` VARCHAR(255) NOT NULL,
        `description` TEXT NOT NULL,
        `art_theme` VARCHAR(255) NOT NULL,
        `date_creation` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        `price` INT NOT NULL,
        `dimension_height` INT NOT NULL,
        `dimension_width` INT NOT NULL,
        `dimension_depth` INT NOT NULL,
        `price_on_demand` TINYINT NOT NULL,
        `thumbnail` TEXT NOT NULL,
        `artists_id` INT NOT NULL,
        `artwork_technique_id` INT NOT NULL,
        PRIMARY KEY (`id`),
        INDEX `fk_artworks_artists1_idx` (`artists_id` ASC) VISIBLE,
        INDEX `fk_artworks_artwork_technique1_idx` (`artwork_technique_id` ASC) VISIBLE,
        CONSTRAINT `fk_artworks_artists1` FOREIGN KEY (`artists_id`) REFERENCES `mydb`.`artists` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `fk_artworks_artwork_technique1` FOREIGN KEY (`artwork_technique_id`) REFERENCES `mydb`.`artwork_technique` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
    );

-- -----------------------------------------------------
-- Table `mydb`.`set_favorite`
-- -----------------------------------------------------
CREATE TABLE
    IF NOT EXISTS `mydb`.`set_favorite` (
        `users_id` INT NOT NULL,
        `artworks_id` INT NOT NULL,
        PRIMARY KEY (`users_id`, `artworks_id`),
        INDEX `fk_users_has_artworks_artworks1_idx` (`artworks_id` ASC) VISIBLE,
        INDEX `fk_users_has_artworks_users1_idx` (`users_id` ASC) VISIBLE,
        CONSTRAINT `fk_users_has_artworks_users1` FOREIGN KEY (`users_id`) REFERENCES `mydb`.`users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `fk_users_has_artworks_artworks1` FOREIGN KEY (`artworks_id`) REFERENCES `mydb`.`artworks` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
    );

-- -----------------------------------------------------
-- Table `mydb`.`exhibit`
-- -----------------------------------------------------
CREATE TABLE
    IF NOT EXISTS `mydb`.`exhibit` (
        `events_id` INT NOT NULL,
        `artworks_id` INT NOT NULL,
        PRIMARY KEY (`events_id`, `artworks_id`),
        INDEX `fk_events_has_artworks_artworks1_idx` (`artworks_id` ASC) VISIBLE,
        INDEX `fk_events_has_artworks_events1_idx` (`events_id` ASC) VISIBLE,
        CONSTRAINT `fk_events_has_artworks_events1` FOREIGN KEY (`events_id`) REFERENCES `mydb`.`events` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `fk_events_has_artworks_artworks1` FOREIGN KEY (`artworks_id`) REFERENCES `mydb`.`artworks` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
    );

SET SQL_MODE = @OLD_SQL_MODE;

SET FOREIGN_KEY_CHECKS = @OLD_FOREIGN_KEY_CHECKS;

SET UNIQUE_CHECKS = @OLD_UNIQUE_CHECKS;

Réduire