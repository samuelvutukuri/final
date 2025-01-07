import { get_preferences, openDB, save_preferences } from '@/lib/sqlite'
import { getAuth } from '@clerk/nextjs/server'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Ollama } from 'ollama'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

    const {userId} = getAuth(req)
    
    const response = await get_preferences(userId??"")
    const conversation = [
        { 
            role: "system",
            content: `You are an english tutor and ${req.body.prompt}
            Evaluate the student sentence. If the sentence is wrong, provide the correct version and give learning suggestions to the student.
            This is your student preferences:
            Language Level : ${response? response.languageLevel : "Beginner"}
            Objectives : ${response ? response.objectives: "Everyday"}
            Commitment : ${response? response.commitment: "Just for fun"}
            
            You should not send empty responses.
            ` 

        }
    ]
    console.log([...conversation, ...req.body.conversation])
    const ollama = new Ollama({host: "http://localhost:11434"})
    const message = await ollama.chat({
        model: "gemma:2b",
        messages: [...conversation, ...req.body.conversation]
    })
    res.status(200).json({ response: message })
}
