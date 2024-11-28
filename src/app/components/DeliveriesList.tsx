// 'use client';

// import React, { useEffect, useState } from 'react';

// // Define the interface to match your delivery data structure
// interface Delivery {
//     id: number;
//     senderName: string;
//     senderContact: string;
//     senderAddress: string;
//     recipientName: string;
//     recipientAddress: string;
//     recipientContact: string;
//     packageWeight: string;
//     deliveryOption: string;
//     deliveryDate: string;
//     createdAt: Date;
// }

// const DeliveriesList = () => {
//     const [deliveries, setDeliveries] = useState<Delivery[]>([]);

//     useEffect(() => {
//         const fetchDeliveries = async () => {
//             try {
//                 const response = await fetch('/api/deliveries');
//                 const data = await response.json();
//                 setDeliveries(data.deliveries);
//             } catch (error) {
//                 console.error('Error fetching deliveries:', error);
//             }
//         };

//         fetchDeliveries();
//     }, []);

//     return (
//         <section className="bg-gray-50 py-16">
//             <div className="container mx-auto px-6 md:px-12 lg:px-20">
//                 <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
//                     Submitted Deliveries
//                 </h2>
//                 {deliveries.length === 0 ? (
//                     <p className="text-center text-gray-600">No deliveries yet.</p>
//                 ) : (
//                     <ul className="space-y-4">
//                         {deliveries.map((delivery, index) => (
//                             <li
//                                 key={delivery.id || index}
//                                 className="bg-white p-4 rounded-lg shadow"
//                             >
//                                 <p><strong>Sender:</strong> {delivery.senderName} ({delivery.senderContact})</p>
//                                 <p><strong>Recipient:</strong> {delivery.recipientName} ({delivery.recipientContact})</p>
//                                 <p><strong>Address:</strong> {delivery.recipientAddress}</p>
//                                 <p><strong>Package Weight:</strong> {delivery.packageWeight} kg</p>
//                                 <p><strong>Delivery Option:</strong> {delivery.deliveryOption}</p>
//                                 <p><strong>Delivery Date:</strong> {delivery.deliveryDate}</p>
//                             </li>
//                         ))}
//                     </ul>
//                 )}
//             </div>
//         </section>
//     );
// };

// export default DeliveriesList;
