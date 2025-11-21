"use client"

import * as React from "react"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export interface TestimonialProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  role: string
  company?: string
  testimonial: string
  rating?: number
  image?: string
}

export const Testimonial = React.forwardRef<HTMLDivElement, TestimonialProps>(
  ({ name, role, company, testimonial, rating = 5, image, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-6 transition-all hover:shadow-lg hover:border-indigo-500/50 hover:bg-gray-900/80 md:p-8",
          className
        )}
        {...props}
      >
        <div className="absolute right-6 top-6 text-6xl font-serif text-gray-700">
          "
        </div>

        <div className="flex flex-col gap-4 justify-between h-full">
          {rating > 0 && (
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={16}
                  className={cn(
                    index < rating
                      ? "fill-indigo-400 text-indigo-400"
                      : "fill-gray-700 text-gray-700"
                  )}
                />
              ))}
            </div>
          )}

          <p className="text-pretty text-base text-gray-300">
            {testimonial}
          </p>

          <div className="flex items-center gap-4 justify-start">
            <div className="flex items-center gap-4">
              {image && (
                <img
                  src={image}
                  alt={name}
                  className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-purple-400"
                />
              )}

              <div className="flex flex-col">
                <h3 className="font-semibold text-white">{name}</h3>
                <p className="text-sm text-gray-400">
                  {role}
                  {company && ` @ ${company}`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
)
Testimonial.displayName = "Testimonial" 