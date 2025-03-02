import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Textarea } from "@/components/ui/textarea"




const budgetOptions = [
  {
    id: 1,
    value: 'Budget Friendly',
  },
  {
    id: 2,
    value: 'Moderate',
  },
  {
    id: 3,
    value: 'Luxury',
  },
]

const travelTypeOptions = [
  {
    id: 1,
    value: 'Flight',
  },
  {
    id: 2,
    value: 'Train',
  },
  {
    id: 3,
    value: 'Bus',
  },
  {
    id: 4,
    value: 'Car Rental',
  },
]


const CreateTrip = () => {
  type form = {
    destination: string,
    startDate: string,
    endDate: string,
    budget: string,
    accommodationType: string,
    travelType: string,
    preferredActivities: string,
    preferredTransport: string,
  }

  const [form, setForm] = useState<form>({
    destination: '',
    startDate: '',
    endDate: '',
    budget: '',
    accommodationType: '',
    travelType: '',
    preferredActivities: '',
    preferredTransport: ''
  })



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
    console.log(form);

  }


  const handleSelectChange = (value: string, type: string) => {
    if (type == "budget") {
      setForm({ ...form, budget: value })
    } else {
      setForm({ ...form, preferredTransport: value })
    }
  }
  return (
    <div className='w-1/2 mx-auto mt-10 tracking-wider max-sm:w-full p-4 max-sm:mt-1'>
      <div>
        <div className='text-3xl font-bold tracking-wider'>Create a Trip</div>
        <div className='text-lg '>Create a new trip and get started with your travel planning.</div>
      </div>
      <div className="mt-10">
        <div className="text-xl font-semibold">🛫 Trip Details</div>
        <div className="mt-2">
          <Input placeholder='Destination (City/Country)' />
          <div className="flex gap-4 mt-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="startdate">Start Date</Label>
              <Input type="date" id="startdate" placeholder="start Date" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="enddate">End Date</Label>
              <Input type="date" id="enddate" placeholder="End Date" />
            </div>
          </div>
          <div className="mt-4">
            <Label htmlFor="budget">Budget</Label>
            <div className="grid grid-cols-3 gap-4 mt-1 max-sm:grid-cols-2">
              {budgetOptions.map((option) => (
                <div className={`h-28 border rounded-lg flex justify-center items-center ${form.budget == option.value ? "bg-black text-white" : ""}`} onClick={() => handleSelectChange(option.value, "budget")}>{option.value}</div>
              ))}
            </div>
          </div>
        </div>
      </div>


      <div className="mt-10">
        <div className="text-xl font-semibold">🌍 Travel Preferences</div>
        <div className="">
          <div className="flex gap-4 mt-4 max-sm:flex-col">
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="w-full">
                <Button variant="outline" className="">{form.travelType ? form.travelType : "Select Travel Type"}</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full">
                <DropdownMenuLabel>Travel Type</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup className="w-80" value={form.travelType} onValueChange={(value) => setForm({ ...form, travelType: value })}>
                  <DropdownMenuRadioItem value="👤 Solo">👤 Solo</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="👨‍👩‍👧 Family">👨‍👩‍👧 Family</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="🏕️ Adventure">🏕️ Adventure</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="💎 Luxury">💎 Luxury</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="❤️ Romantic">❤️ Romantic</DropdownMenuRadioItem>

                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="w-full">
                <Button variant="outline" className="">{form.preferredActivities ? form.preferredActivities : "Select Preferred Activities"}</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80">
                <DropdownMenuLabel>Preferred Activities</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup className="w-full" value={form.preferredActivities} onValueChange={(value) => setForm({ ...form, preferredActivities: value })}>
                  <DropdownMenuRadioItem value="🌳 Nature & Wildlife">🌳 Nature & Wildlife</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="🏖️ Beach & Relaxation">🏖️ Beach & Relaxation</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="🏛️ Culture & History">🏛️ Culture & History</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="🎉 Nightlife & Parties">🎉 Nightlife & Parties</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="⚽ Sports & Adventure">⚽ Sports & Adventure</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="text-xl font-semibold">🏨 Accommodation & Transport</div>
        <div className="mt-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="w-full">
              <Button variant="outline" className="">{form.accommodationType ? form.accommodationType : "Select Accommodation Type"}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full">
              <DropdownMenuLabel>Accommodation Type</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup className="w-96" value={form.accommodationType} onValueChange={(value) => setForm({ ...form, accommodationType: value })}>
                <DropdownMenuRadioItem value="🏨 Hotel">🏨 Hotel</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="🏠 Apartment">🏠 Apartment</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="🏡 Villa">🏡 Villa</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="🏕️ Camping">🏕️ Camping</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="🏠 Hostel">🏠 Hostel</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="mt-4">
            <Label htmlFor="budget">Preferred Transport</Label>
            <div className="grid grid-cols-3 gap-4 mt-1 max-sm:grid-cols-2">
              {travelTypeOptions.map((option) => (
                <div className={`h-28 border rounded-lg flex justify-center items-center ${form.preferredTransport == option.value ? "bg-black text-white" : ""}`} onClick={() => handleSelectChange(option.value, "")}>{option.value}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="text-xl font-semibold">📝 Additional Requests</div>
        <Textarea className="mt-4" placeholder="Any special requests? (Dietary, accessibility, etc.)" rows={6} />
      </div>
      <Button className="mt-4 mb-20 w-full">🚀 Generate AI Trip Plan</Button>
    </div>
  )
}

export default CreateTrip