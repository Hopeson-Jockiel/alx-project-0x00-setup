import React from "react"
import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1>

      {/* Cards */}
      <Card />
      <Card />
      <Card />

      {/* Buttons */}
      <div className="mt-6 flex gap-4 flex-wrap">
        <Button title="Small" styles="text-sm rounded-sm" />
        <Button title="Medium" styles="text-base rounded-md" />
        <Button title="Large" styles="text-lg rounded-full" />
      </div>
    </div>
  )
}

export default Landing
