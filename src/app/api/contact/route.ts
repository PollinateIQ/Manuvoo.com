import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const { firstName, lastName, email, message, consent } = body
    
    if (!firstName || !lastName || !email || !message || !consent) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }
    
    // Log the form submission (in production, you'd save to database or send email)
    console.log('Contact form submission:', {
      firstName,
      lastName,
      email,
      phone: body.phone || '',
      restaurantName: body.restaurantName || '',
      locations: body.locations || '',
      interest: body.interest || '',
      message,
      consent,
      submittedAt: body.submittedAt,
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    })
    
    // Here you would typically:
    // 1. Save to database (e.g., Supabase, MongoDB, etc.)
    // 2. Send email notification to your team
    // 3. Send confirmation email to the user
    // 4. Add to CRM system
    
    // For now, we'll simulate processing time and return success
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Example of how you might send an email notification:
    // await sendEmailNotification({
    //   to: 'sales@manuvoo.com',
    //   subject: `New Contact Form Submission from ${firstName} ${lastName}`,
    //   body: `
    //     Name: ${firstName} ${lastName}
    //     Email: ${email}
    //     Phone: ${body.phone || 'Not provided'}
    //     Restaurant: ${body.restaurantName || 'Not provided'}
    //     Locations: ${body.locations || 'Not provided'}
    //     Interest: ${body.interest || 'Not provided'}
    //     Message: ${message}
    //   `
    // })
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact form submitted successfully',
        id: `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      },
      { status: 200 }
    )
    
  } catch (error) {
    console.error('Contact form submission error:', error)
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}
