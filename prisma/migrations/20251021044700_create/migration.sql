-- CreateTable
CREATE TABLE `user_credentials` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `license_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_information` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `license_id` INTEGER NOT NULL,
    `credential_id` INTEGER NOT NULL,

    UNIQUE INDEX `user_information_credential_id_key`(`credential_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `m_master_department` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `license_id` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `created_on` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `created_by_id` INTEGER NOT NULL,
    `modified_on` DATETIME(3) NULL,
    `modified_by_id` INTEGER NULL,
    `status` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `m_master_department_log` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `code` VARCHAR(191) NULL,
    `license_id` INTEGER NOT NULL,
    `description` VARCHAR(191) NULL,
    `created_on` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `status` BOOLEAN NULL,
    `change_description` VARCHAR(191) NOT NULL,
    `action` ENUM('Created', 'Modified', 'Activated', 'Deactivated', 'Download') NOT NULL,
    `department_id` INTEGER NULL,
    `created_by_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user_information` ADD CONSTRAINT `user_information_credential_id_fkey` FOREIGN KEY (`credential_id`) REFERENCES `user_credentials`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_master_department` ADD CONSTRAINT `m_master_department_created_by_id_fkey` FOREIGN KEY (`created_by_id`) REFERENCES `user_information`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_master_department` ADD CONSTRAINT `m_master_department_modified_by_id_fkey` FOREIGN KEY (`modified_by_id`) REFERENCES `user_information`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_master_department_log` ADD CONSTRAINT `m_master_department_log_created_by_id_fkey` FOREIGN KEY (`created_by_id`) REFERENCES `user_information`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `m_master_department_log` ADD CONSTRAINT `m_master_department_log_department_id_fkey` FOREIGN KEY (`department_id`) REFERENCES `m_master_department`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
