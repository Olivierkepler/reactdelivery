'use client';

import React, { useEffect, useState } from 'react';

// Define the interface for a delivery
interface Delivery {
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
    createdAt: string | Date;
}

const DeliveriesList = () => {
    // Add type annotation to useState
    const [deliveries, setDeliveries] = useState<Delivery[]>([]);

    useEffect(() => {
        const fetchDeliveries = async () => {
            try {
                const response = await fetch('/api/deliveries');
                const data = await response.json();
                setDeliveries(data.deliveries);
            } catch (error) {
                console.error('Error fetching deliveries:', error);
            }
        };

        fetchDeliveries();
    }, []);

    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
                    Delivery History
                </h2>
                {deliveries.length === 0 ? (
                    <p className="text-center text-gray-600">No deliveries found.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {deliveries.map((delivery) => (
                            <div
                                key={delivery.id}
                                className="bg-white rounded-lg shadow-lg p-6 border border-gray-200"
                            >
                                <h3 className="text-lg font-bold text-blue-700">
                                    Delivery ID: {delivery.id}
                                </h3>
                                <div className="mt-4">
                                    <p className="text-sm text-gray-500">Sender:</p>
                                    <p className="text-gray-800 font-medium">{delivery.senderName}</p>
                                    <p className="text-sm text-gray-600">{delivery.senderAddress}</p>
                                    <p className="text-sm text-gray-600">Contact: {delivery.senderContact}</p>
                                </div>
                                <div className="mt-4">
                                    <p className="text-sm text-gray-500">Recipient:</p>
                                    <p className="text-gray-800 font-medium">{delivery.recipientName}</p>
                                    <p className="text-sm text-gray-600">{delivery.recipientAddress}</p>
                                    <p className="text-sm text-gray-600">Contact: {delivery.recipientContact}</p>
                                </div>
                                <div className="mt-4">
                                    <p className="text-sm text-gray-500">Package Details:</p>
                                    <p className="text-sm text-gray-600">
                                        Weight: {delivery.packageWeight} kg
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Delivery Option: {delivery.deliveryOption}
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <p className="text-sm text-gray-500">Delivery Date:</p>
                                    <p className="text-gray-800">
                                        {new Date(delivery.deliveryDate).toLocaleDateString()}
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <p className="text-sm text-gray-500">Created At:</p>
                                    <p className="text-sm text-gray-600">
                                        {new Date(delivery.createdAt).toLocaleString()}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default DeliveriesList;
