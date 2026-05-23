const supabaseUrl =
  "https://dxaqybpfdsuzdrscxtam.supabase.co"

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4YXF5YnBmZHN1emRyc2N4dGFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk1NDE0NTQsImV4cCI6MjA5NTExNzQ1NH0.w88qliGPGh63nFYrMxCEAv6MNW7aOZlRmSTfReazD_4"

const supabaseClient =
  supabase.createClient(
    supabaseUrl,
    supabaseKey
  )
