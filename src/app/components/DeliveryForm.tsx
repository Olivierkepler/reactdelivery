'use client';

import React, { useState } from 'react';

const DeliveryForm = () => {
    const [formData, setFormData] = useState({
        senderName: '',
        senderAddress: '',
        senderContact: '',
        recipientName: '',
        recipientAddress: '',
        recipientContact: '',
        packageWeight: '',
        deliveryOption: 'standard',
        deliveryDate: '',
    });

    const [estimatedCost, setEstimatedCost] = useState(0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        // Update form data state
        setFormData({ ...formData, [name]: value });

        // Recalculate the cost when package weight or delivery option changes
        if (name === 'packageWeight' || name === 'deliveryOption') {
            const updatedWeight = name === 'packageWeight' ? value : formData.packageWeight;
            const updatedOption = name === 'deliveryOption' ? value : formData.deliveryOption;
            calculateCost(updatedWeight, updatedOption);
        }
    };

    const calculateCost = (weight: string, option: string) => {
        const weightValue = parseFloat(weight) || 0; // Convert weight to a number, default to 0 if invalid
        let cost = weightValue * 5; // Base cost: $5 per kg

        // Add additional costs based on the delivery option
        if (option === 'express') cost += 10; // Express: $10 extra
        if (option === 'sameDay') cost += 20; // Same-Day: $20 extra

        setEstimatedCost(cost); // Update estimated cost
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Delivery Request Submitted:', formData);
        alert('Your delivery request has been submitted!');
    };

    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
                    Schedule Your Delivery
                </h2>
                <form
                    onSubmit={handleSubmit}
                    className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg"
                >
                    {/* Sender Details */}
                    <h3 className="text-2xl font-bold text-gray-700 mb-4">Sender Information</h3>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="senderName"
                            placeholder="Sender Name"
                            value={formData.senderName}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="senderAddress"
                            placeholder="Sender Address"
                            value={formData.senderAddress}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="senderContact"
                            placeholder="Sender Contact"
                            value={formData.senderContact}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
                            required
                        />
                    </div>

                    {/* Recipient Details */}
                    <h3 className="text-2xl font-bold text-gray-700 mb-4">Recipient Information</h3>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="recipientName"
                            placeholder="Recipient Name"
                            value={formData.recipientName}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="recipientAddress"
                            placeholder="Recipient Address"
                            value={formData.recipientAddress}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="recipientContact"
                            placeholder="Recipient Contact"
                            value={formData.recipientContact}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
                            required
                        />
                    </div>

                    {/* Package Details */}
                    <h3 className="text-2xl font-bold text-gray-700 mb-4">Package Information</h3>
                    <div className="mb-4">
                        <input
                            type="number"
                            name="packageWeight"
                            placeholder="Weight (kg)"
                            value={formData.packageWeight}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="deliveryOption" className="block text-sm font-medium text-gray-700">
                            Delivery Option
                        </label>
                        <select
                            name="deliveryOption"
                            onChange={handleChange}
                            id="deliveryOption"
                            value={formData.deliveryOption}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
                            required
                        >
                            <option value="standard">Standard Delivery</option>
                            <option value="express">Express Delivery</option>
                            <option value="sameDay">Same-Day Delivery</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="deliveryDate" className="block text-sm font-medium text-gray-700">
                            Delivery Date
                        </label>
                        <input
                            type="date"
                            name="deliveryDate"
                            id="deliveryDate"
                            value={formData.deliveryDate}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
                            required
                        />
                    </div>

                    {/* Cost Estimation */}
                    <div className="mb-6">
                        <p className="text-lg font-medium text-gray-700">
                            Estimated Cost: <span className="text-blue-600">${estimatedCost}</span>
                        </p>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Schedule Delivery
                    </button>
                </form>
            </div>
        </section>
    );
};

export default DeliveryForm;
