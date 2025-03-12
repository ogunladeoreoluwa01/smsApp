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
  const[ selectedNumberName, setSelectedNumberName] = useState();
  const[ selectedNumberpeator, setSelectedNumberOperator] = useState();


  useEffect(() => {
    setDst([
      { number: "2347051707101", name: "Henry", lineOperator: "Glo" },
      { number: "2349081083292", name: "Hakeem's ", lineOperator: "9mobile" },
      { number: "2348179654429", name: "Pelumi's ", lineOperator: "9mobile" },
      { number: "2347082815000", name: "Emmanuel's ", lineOperator: "Airtel" },
      { number: "2347086813565", name: "Michael's ", lineOperator: "Airtel" },
      { number: "2348079258587", name: "Michael's", lineOperator: "Glo" },
      { number: "2347044782549", name: "Michael's ", lineOperator: "MTN" },
      { number: "2349067074483", name: "Mr. Emmanuel's ", lineOperator: "MTN" },
      { number: "2347065742398", name: "Abdullahi's ", lineOperator: "MTN" },
      { number: "2348032008658", name: "Mr Adekunle's ", lineOperator: "MTN" },
      { number: "2349022121975", name: "Mr Adekunle's ", lineOperator: "Airtel" },
      { number: "2348036881732", name: "Oluwatobi's ", lineOperator: "MTN" },
      { number: "2349070754180", name: "Oluwatobi's ", lineOperator: "Airtel" }
  ]);// Corrected: Assign DST to src
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
              <Input id="username" placeholder="usersname" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">password</Label>
              <Input id="password" placeholder="password" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Src</Label>
              <Input id="password" placeholder="Src" />
            </div>
            <div className="flex flex-col space-y-1.5">
            
              
              
              <Select>
                <SelectTrigger id="phoneNumber">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                {DST.map((number, index) => (
          <SelectItem  key={index} value={number.number} onChange={(e) => {
            setSelectedNumberName(number.name);
            setSelectedNumberOperator(number.lineOperator);
            console.log(`Selected Number: ${number.number}, Name: ${number.name}, Operator: ${number.lineOperator}`);
          }}>
          <Label htmlFor={number.number}>{number.number}</Label>/
          <Label  htmlFor={number.name}>{number.name}</Label>/
          <Label  htmlFor={number.lineOperator}>{number.lineOperator}</Label>
          </SelectItem>

          
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
