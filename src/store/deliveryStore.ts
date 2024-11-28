export interface Delivery {
    id: number;
    senderName: string;
    senderAddress: string;
    senderContact: string;
    recipientName: string;
    recipientAddress: string;
    recipientContact: string;
    packageWeight: string;
    deliveryOption: string;
    deliveryDate: string;
    createdAt: Date;
}

// Temporary in-memory storage for deliveries
export const deliveries: Delivery[] = [];
