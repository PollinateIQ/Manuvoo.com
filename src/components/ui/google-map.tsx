'use client'

interface GoogleMapProps {
  lat: number
  lng: number
  title?: string
  className?: string
  zoom?: number
}

export default function GoogleMap({ lat, lng, title = 'PollinateIQ PTY LTD - Manuvoo Office', className = '', zoom = 15 }: GoogleMapProps) {
  // Create Google Maps embed URL with the coordinates
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dO_W4Qx7-4Qx7Q&q=${lat},${lng}&zoom=${zoom}&maptype=roadmap`
  
  // Alternative: Use the more reliable embed URL without API key
  const embedSrc = `https://www.google.com/maps?q=${lat},${lng}&hl=en&z=${zoom}&output=embed`

  return (
    <div className={`w-full h-full min-h-[200px] rounded-2xl overflow-hidden ${className} relative`}>
      {/* Google Maps Embed */}
      <iframe
        src={embedSrc}
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: '200px' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
        className="rounded-2xl"
      />
      
      {/* Overlay for dark theme effect */}
      <div 
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.05) 100%)',
          mixBlendMode: 'multiply'
        }}
      />
    </div>
  )
}


