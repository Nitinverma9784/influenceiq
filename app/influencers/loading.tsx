export default function Loading() {
  return (
    <div className="container py-16">
      <div className="max-w-3xl mx-auto text-center">
        <div className="h-8 w-32 bg-gray-200 rounded-full animate-pulse mx-auto mb-4"></div>
        <div className="h-12 w-full bg-gray-200 rounded-lg animate-pulse mb-6"></div>
        <div className="h-6 w-3/4 bg-gray-200 rounded-lg animate-pulse mx-auto mb-8"></div>
        <div className="h-12 w-full bg-gray-200 rounded-lg animate-pulse"></div>
      </div>
    </div>
  )
}

