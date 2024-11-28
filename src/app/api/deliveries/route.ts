// import { NextResponse } from 'next/server';
// import { deliveries } from '@/store/deliveryStore';

// export async function POST(request: Request) {
//     try {
//         const body = await request.json();

//         // Destructure the request body
//         const {
//             senderName,
//             senderAddress,
//             senderContact,
//             recipientName,
//             recipientAddress,
//             recipientContact,
//             packageWeight,
//             deliveryOption,
//             deliveryDate,
//         } = body;

//         // Validate required fields
//         if (
//             !senderName ||
//             !senderAddress ||
//             !senderContact ||
//             !recipientName ||
//             !recipientAddress ||
//             !recipientContact ||
//             !packageWeight ||
//             !deliveryOption ||
//             !deliveryDate
//         ) {
//             return NextResponse.json(
//                 { error: 'All fields are required.' },
//                 { status: 400 }
//             );
//         }

//         // Add the new delivery to the store
//         const newDelivery = {
//             id: deliveries.length + 1,
//             senderName,
//             senderAddress,
//             senderContact,
//             recipientName,
//             recipientAddress,
//             recipientContact,
//             packageWeight: parseFloat(packageWeight).toString(), // Convert weight to string
//             deliveryOption,
//             deliveryDate,
//             createdAt: new Date().toISOString(), // Store as ISO format
//         };

//         deliveries.push({ ...newDelivery, createdAt: new Date(newDelivery.createdAt) });

//         return NextResponse.json(
//             { message: 'Delivery scheduled successfully.', delivery: newDelivery },
//             { status: 201 }
//         );
//     } catch (error) {
//         console.error('Error handling POST request:', error);
//         return NextResponse.json(
//             { error: 'Failed to process your request. Please try again.' },
//             { status: 500 }
//         );
//     }
// }

// export async function GET() {
//     try {
//         // Return the deliveries array as the response
//         return NextResponse.json({ deliveries }, { status: 200 });
//     } catch (error) {
//         console.error('Error handling GET request:', error);
//         return NextResponse.json(
//             { error: 'Failed to retrieve deliveries. Please try again.' },
//             { status: 500 }
//         );
//     }
// }
