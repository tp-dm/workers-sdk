/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Error enums that can be returned when there has been an error with mutating the applications resource
 */
export enum ApplicationMutationError {
	IMAGE_REGISTRY_RETURNED_ERROR = "IMAGE_REGISTRY_RETURNED_ERROR",
	IMAGE_REGISTRY_DOESNT_CONTAIN_IMAGE = "IMAGE_REGISTRY_DOESNT_CONTAIN_IMAGE",
	VALIDATE_INPUT = "VALIDATE_INPUT",
	SURPASSED_BASE_LIMITS = "SURPASSED_BASE_LIMITS",
	SURPASSED_TOTAL_LIMITS = "SURPASSED_TOTAL_LIMITS",
	LOCATION_NOT_ALLOWED = "LOCATION_NOT_ALLOWED",
	LOCATION_SURPASSED_BASE_LIMITS = "LOCATION_SURPASSED_BASE_LIMITS",
	IMAGE_REGISTRY_NOT_CONFIGURED = "IMAGE_REGISTRY_NOT_CONFIGURED",
	JOB_CREATE_NOT_ALLOWED = "JOB_CREATE_NOT_ALLOWED",
	DURABLE_OBJECT_NOT_FOUND = "DURABLE_OBJECT_NOT_FOUND",
	DURABLE_OBJECT_NOT_CONTAINER_ENABLED = "DURABLE_OBJECT_NOT_CONTAINER_ENABLED",
	DURABLE_OBJECT_ALREADY_HAS_APPLICATION = "DURABLE_OBJECT_ALREADY_HAS_APPLICATION",
}
