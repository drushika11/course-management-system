import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize stripe with a dummy key so the build doesn't fail, 
// but in production it requires a real secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder', {
  apiVersion: '2025-02-24.acacia',
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { courseId, price, title } = body;

    // Simulate creating a payment intent or checkout session
    if (!process.env.STRIPE_SECRET_KEY) {
      console.warn("No STRIPE_SECRET_KEY found. Mocking checkout success.");
      return NextResponse.json({ 
        success: true, 
        message: "Mock payment successful",
        mockSessionUrl: `/dashboard?enrollment_success=${courseId}`
      });
    }

    // Actual Stripe Checkout Session creation (when configured)
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: {
              name: title,
              description: 'Lifetime access to course materials',
            },
            unit_amount: Math.round(price * 100), // convert to smallest currency unit (paise)
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/dashboard?success=true&course=${courseId}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/checkout?courseId=${courseId}&canceled=true`,
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });

  } catch (error: any) {
    console.error("Stripe API Error:", error.message);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
