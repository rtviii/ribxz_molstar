
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="container mx-auto my-8 p-4">
      <h1 className="text-4xl font-bold mb-6">Ribosome Structures</h1>
      <div className="grid grid-cols-12 gap-4 mb-4">
        <div className="col-span-3 border-r-2 border-gray-200 pr-4">
          <Input className="mb-4 w-full" placeholder="Search" />
          <label className="block text-sm font-medium mb-1">Deposition Date</label>
          <div className="flex justify-between">
            <div className="flex justify-between w-full">
              <Input className="mb-4 w-1/2" max="2024" min="1950" type="range" />
              <Input className="mb-4 w-1/2" max="2024" min="1950" type="range" />
            </div>
            <div className="w-2/12 text-right">
              <span className="text-xs">1950</span>
              <span className="text-xs">2024</span>
            </div>
          </div>
          <label className="block text-sm font-medium mb-1">Resolution</label>
          <div className="flex justify-between">
            <div className="flex justify-between w-full">
              <Input className="mb-4 w-1/2" max="20" min="1" type="range" />
              <Input className="mb-4 w-1/2" max="20" min="1" type="range" />
            </div>
            <div className="w-2/12 text-right">
              <span className="text-xs">1</span>
              <span className="text-xs">20</span>
            </div>
          </div>
          <Select>
            <SelectTrigger id="proteins">
              <SelectValue placeholder="Proteins Present" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="xray">XRAY</SelectItem>
              <SelectItem value="em">EM</SelectItem>
            </SelectContent>
          </Select>
          <div className="mt-4 border-t-2 border-gray-200 pt-4">
            <h2 className="text-lg font-semibold mb-2">Sort by:</h2>
            <Button className="mb-2 text-sm font-medium" variant="outline">
              RESOLUTION
            </Button>
            <Button className="mb-2 text-sm font-medium" variant="outline">
              YEAR
            </Button>
            <Button className="mb-2 text-sm font-medium" variant="outline">
              NUMBER OF PROTEINS
            </Button>
            <Button className="mb-2 text-sm font-medium" variant="outline">
              PDB CODENAME
            </Button>
          </div>
        </div>
        <div className="col-span-9 pl-4">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <Card className="w-full bg-white border border-transparent hover:border-gray-300 group">
              <CardContent>
                <img
                  alt="Molecule Placeholder"
                  className="w-full h-32 object-cover mb-2"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <p className="font-bold">Molecule 1</p>
                <p className="text-sm">Description of Molecule 1</p>
              </CardContent>
            </Card>
            <Card className="w-full bg-white border border-transparent hover:border-gray-300 group">
              <CardContent>
                <img
                  alt="Molecule Placeholder"
                  className="w-full h-32 object-cover mb-2"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <p className="font-bold">Molecule 2</p>
                <p className="text-sm">Description of Molecule 2</p>
              </CardContent>
            </Card>
            <Card className="w-full bg-white border border-transparent hover:border-gray-300 group">
              <CardContent>
                <img
                  alt="Molecule Placeholder"
                  className="w-full h-32 object-cover mb-2"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <p className="font-bold">Molecule 3</p>
                <p className="text-sm">Description of Molecule 3</p>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center space-x-2">
            <Button className="bg-[#eaeaea] text-xs">1</Button>
            <Button className="bg-[#eaeaea] text-xs">2</Button>
            <Button className="bg-[#eaeaea] text-xs">3</Button>
            <Button className="bg-[#eaeaea] text-xs">4</Button>
            <Button className="bg-[#eaeaea] text-xs">5</Button>
            <span>...</span>
            <Button className="bg-[#eaeaea] text-xs">56</Button>
            <Button className="bg-[#eaeaea] text-xs">{`>`}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}


