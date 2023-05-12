export type DomainError<ErrorMessage extends string = string, ErrorMetadata = null> = {
    message: ErrorMessage;
    metadata: ErrorMetadata;
    occurredAt: Date;
};
