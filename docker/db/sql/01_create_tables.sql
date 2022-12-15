DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`
(
    `id`            bigint(20)   NOT NULL AUTO_INCREMENT,
    `name`  varchar(255) NOT NULL UNIQUE,
    `password_hash` binary(32)   NOT NULL,
    PRIMARY KEY (`id`)
) DEFAULT CHARSET = utf8mb4;
