'use client';

const DeliveryForm = () => {
    let estimatedCost = 0;

    const handleFormChange = () => {
        const packageWeightInput = document.getElementById(
            'packageWeight'
        ) as HTMLInputElement;
        const deliveryOptionInput = document.getElementById(
            'deliveryOption'
        ) as HTMLSelectElement;

        const weight = parseFloat(packageWeightInput?.value) || 0;
        const deliveryOption = deliveryOptionInput?.value;

        // Calculate cost
        let cost = weight * 5; // Base cost per kg
        if (deliveryOption === 'express') cost += 10;
        if (deliveryOption === 'sameDay') cost += 20;

        // Update estimated cost dynamically
        const costDisplay = document.getElementById('costDisplay') as HTMLElement;
        costDisplay.textContent = `$${cost.toFixed(2)}`;
        estimatedCost = cost;
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);

        const payload = {
            senderName: formData.get('senderName'),
            senderAddress: formData.get('senderAddress'),
            senderContact: formData.get('senderContact'),
            recipientName: formData.get('recipientName'),
            recipientAddress: formData.get('recipientAddress'),
            recipientContact: formData.get('recipientContact'),
            packageWeight: formData.get('packageWeight'),
            deliveryOption: formData.get('deliveryOption'),
            deliveryDate: formData.get('deliveryDate'),
        };

        console.log('Delivery Request Submitted:', payload);
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
                    onChange={handleFormChange}
                    className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg"
                >
                    {/* Sender Details */}
                    <h3 className="text-2xl font-bold text-gray-700 mb-4">Sender Information</h3>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="senderName"
                            placeholder="Sender Name"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="senderAddress"
                            placeholder="Sender Address"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="senderContact"
                            placeholder="Sender Contact"
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
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="recipientAddress"
                            placeholder="Recipient Address"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="recipientContact"
                            placeholder="Recipient Contact"
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
                            id="packageWeight"
                            placeholder="Weight (kg)"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <select
                            name="deliveryOption"
                            id="deliveryOption"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
                        >
                            <option value="standard">Standard Delivery</option>
                            <option value="express">Express Delivery</option>
                            <option value="sameDay">Same-Day Delivery</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <input
                            type="date"
                            name="deliveryDate"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
                            required
                        />
                    </div>

                    {/* Cost Estimation */}
                    <div className="mb-6">
                        <p className="text-lg font-medium text-gray-700">
                            Estimated Cost: <span id="costDisplay">$0.00</span>
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
