
import { createClient } from  '@sanity/client'

export default createClient({
  projectId: '6ghy0b8a', 
  dataset: 'production',      
  useCdn: true,                
  apiVersion: '2025-04-09',   
})
