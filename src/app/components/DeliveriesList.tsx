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
                    <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse border border-gray-300">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">Sender</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">Recipient</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">Package</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">Delivery Date</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">Created At</th>
                                </tr>
                            </thead>
                            <tbody>
                                {deliveries.map((delivery) => (
                                    <tr key={delivery.id} className="hover:bg-gray-100">
                                        <td className="border border-gray-300 px-4 py-2">{delivery.id}</td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            <p>{delivery.senderName}</p>
                                            <p className="text-sm text-gray-600">{delivery.senderAddress}</p>
                                            <p className="text-sm text-gray-600">Contact: {delivery.senderContact}</p>
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            <p>{delivery.recipientName}</p>
                                            <p className="text-sm text-gray-600">{delivery.recipientAddress}</p>
                                            <p className="text-sm text-gray-600">Contact: {delivery.recipientContact}</p>
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            <p>Weight: {delivery.packageWeight} kg</p>
                                            <p>Option: {delivery.deliveryOption}</p>
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {new Date(delivery.deliveryDate).toLocaleDateString()}
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {new Date(delivery.createdAt).toLocaleString()}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </section>
    );
};

export default DeliveriesList;
