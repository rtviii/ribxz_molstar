/**
 * v0 by Vercel.
 * @see https://v0.dev/t/w38Gf9y6iyT
 */
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="flex flex-col md:flex-row h-full">
        <div className="md:w-1/3 h-full">
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle>7UNW Pseudomonas aeruginosa PAO1</CardTitle>
              <p className="text-gray-500 text-sm">
                Compact IF2 allows initiator tRNA accommodation into the P site and gates the ribosome to elongation
              </p>
            </CardHeader>
            <CardContent className="flex-grow overflow-auto">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                  <Button variant="outline">Info</Button>
                  <Button variant="outline">Components</Button>
                  <Button variant="outline">Landmarks</Button>
                </div>
                <div className="mt-4">
                  <img
                    alt="Biomolecule"
                    className="mb-4"
                    height="200"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between">
                      <strong>Species:</strong>
                      <p className="overflow-ellipsis overflow-hidden hover:overflow-visible">
                        Pseudomonas aeruginosa PAO1
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <strong>Resolution:</strong>
                      <p>2.6 Å</p>
                    </div>
                    <div className="flex justify-between">
                      <strong>Experimental Method:</strong>
                      <p>ELECTRON MICROSCOPY</p>
                    </div>
                    <div className="flex justify-between">
                      <strong>Authors:</strong>
                      <p className="overflow-ellipsis overflow-hidden hover:overflow-visible">John Doe, Jane Smith</p>
                    </div>
                    <div className="flex justify-between">
                      <strong>Year:</strong>
                      <p>2022</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <details className="mb-4">
                    <summary className="font-bold cursor-pointer">PROTEINS</summary>
                    <div className="mt-2">
                      <p>50S ribosomal protein L20</p>
                      <p>Sequence (118AAs)</p>
                      <Button className="mb-2" variant="ghost">
                        Download Sequence (.fasta)
                      </Button>
                      <Button className="mb-2" variant="ghost">
                        Download Structure (.cif)
                      </Button>
                    </div>
                  </details>
                </div>
                <div className="mt-4">
                  <p>Landmarks text goes here...</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Visualize</Button>
              <Button>Download</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="md:w-2/3 h-full">
          <div className="w-full h-full bg-gray-200">
            <div className="flex flex-col gap-4">
              <div />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


