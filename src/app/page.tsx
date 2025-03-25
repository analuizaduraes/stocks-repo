"use client"

import { useState } from "react"
import { PlusCircle } from "lucide-react"

import { Button } from "@src/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@src/components/ui/card"
import { Input } from "@src/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@src/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@src/components/ui/table"
import { Dashboard } from "@src/components/dashboard"

export default function Home() {
  const [stocks, setStocks] = useState<Array<{ id: string; code: string; type: string }>>([])
  const [stockCode, setStockCode] = useState("")
  const [stockType, setStockType] = useState("")

  const handleAddStock = () => {
    if (stockCode && stockType) {
      setStocks([...stocks, { id: Date.now().toString(), code: stockCode, type: stockType }])
      setStockCode("")
      setStockType("")
    }
  }

  const handleRemoveStock = (id: string) => {
    setStocks(stocks.filter((stock) => stock.id !== id))
  }

  
  return (
    <Dashboard>
      <div className="flex flex-col gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Add Stock</CardTitle>
            <CardDescription>
              Add a new stock to your tracking list by entering the stock code and selecting the market.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="flex-1">
                <Input
                  placeholder="Stock code (e.g., AAPL, PETR4)"
                  value={stockCode}
                  onChange={(e) => setStockCode(e.target.value)}
                />
              </div>
              <div className="flex-1">
                <Select value={stockType} onValueChange={setStockType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select market" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usa">USA</SelectItem>
                    <SelectItem value="brazil">Brazil</SelectItem>
                    <SelectItem value="crypto">Cryptocurrency</SelectItem>
                    <SelectItem value="europe">Europe</SelectItem>
                    <SelectItem value="asia">Asia</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={handleAddStock} className="gap-2">
                <PlusCircle className="h-4 w-4" />
                Add Stock
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Tracked Stocks</CardTitle>
            <CardDescription>View and manage all the stocks you are currently tracking.</CardDescription>
          </CardHeader>
          <CardContent>
            {stocks.length === 0 ? (
              <div className="flex h-24 items-center justify-center rounded-md border border-dashed">
                <p className="text-sm text-muted-foreground">No stocks added yet. Add your first stock above.</p>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Stock Code</TableHead>
                    <TableHead>Market</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {stocks.map((stock) => (
                    <TableRow key={stock.id}>
                      <TableCell className="font-medium">{stock.code}</TableCell>
                      <TableCell>
                        {stock.type === "usa" && "USA"}
                        {stock.type === "brazil" && "Brazil"}
                        {stock.type === "crypto" && "Cryptocurrency"}
                        {stock.type === "europe" && "Europe"}
                        {stock.type === "asia" && "Asia"}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="destructive" size="sm" onClick={() => handleRemoveStock(stock.id)}>
                          Remove
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </Dashboard>
  )
}

