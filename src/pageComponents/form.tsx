import * as React from "react"

import { Button } from "../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { useState } from 'react';
import { useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select"
import { Textarea } from "../components/ui/textarea"
export function FormCard() {
  const [DST, setDst] = useState([]);
  const [src, setSrc] = useState([]);
  const [message, setMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  useEffect(() => {
    setDst([
      "2347051707101",
      "2349081083292",
      "2348179654429",
      "2347082815000",
      "2347086813565",
      "2348079258587",
      "2347044782549",
      "2349067074483",
      "2347065742398",
      "2348032008658",
      "2349022121975",
      "2348036881732",
      "2349070754180"
    ]);
    setSrc(['IBTCPension']); // Corrected: Assign DST to src
  }, []); 

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>SMS DEMO</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="username">username</Label>
              <Input id="username" placeholder="usersName" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">password</Label>
              <Input id="password" placeholder="password" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="Src">Src</Label>
              <Select>
                <SelectTrigger id="Src">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                {src.map((number, index) => (
          <SelectItem  key={index} value={number}>{number}</SelectItem>
        ))}
        
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="phoneNumber">phoneNumber</Label>
              <Select>
                <SelectTrigger id="phoneNumber">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                {DST.map((number, index) => (
          <SelectItem  key={index} value={number}>{number}</SelectItem>
        ))}
        
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-col space-y-1.5">
              <Label htmlFor="Src">sms Text</Label>
              <Textarea placeholder="Type your message here." id="message-2" onChange={(e) => setMessage(e.target.value) } />
            </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Send</Button>
      </CardFooter>
    </Card>
  )
}
