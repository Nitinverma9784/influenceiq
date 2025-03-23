export default function Loading() {
  return (
    <div>
      <div className="h-64 md:h-80 w-full bg-gray-200 animate-pulse"></div>

      <div className="container relative -mt-24 mb-8">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <div className="relative w-32 h-32 md:w-40 md:h-40 -mt-16 md:-mt-20 rounded-full bg-gray-200 animate-pulse"></div>

            <div className="flex-1">
              <div className="h-10 w-3/4 bg-gray-200 rounded-lg animate-pulse mb-4"></div>
              <div className="flex gap-2 mb-4">
                <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="h-6 w-24 bg-gray-200 rounded-full animate-pulse"></div>
              </div>
              <div className="h-20 w-full bg-gray-200 rounded-lg animate-pulse mb-4"></div>
              <div className="flex gap-3 mt-6">
                <div className="h-8 w-24 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="h-8 w-24 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="h-8 w-24 bg-gray-200 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-16">
        <div className="h-12 w-full bg-gray-200 rounded-lg animate-pulse mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="h-8 w-48 bg-gray-200 rounded-lg animate-pulse mb-6"></div>
            <div className="grid gap-6">
              <div className="h-32 w-full bg-gray-200 rounded-lg animate-pulse"></div>
              <div className="h-32 w-full bg-gray-200 rounded-lg animate-pulse"></div>
              <div className="h-32 w-full bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
          </div>
          <div>
            <div className="h-64 w-full bg-gray-200 rounded-lg animate-pulse mb-6"></div>
            <div className="h-48 w-full bg-gray-200 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

