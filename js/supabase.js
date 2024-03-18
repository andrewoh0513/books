
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mwwkjaxbepdrzlupryiv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13d2tqYXhiZXBkcnpsdXByeWl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3MjgxMDYsImV4cCI6MjAyNjMwNDEwNn0.4iJJqH6lFcsms4X_FYYi_3btz1ZQh-HvyVKck4syVPg'
const supabase = createClient(supabaseUrl, supabaseKey)

let { data: books, error } = await supabase
  .from('books')
  .select('*')

for (let book of books) {
    let bookList = document.getElementById('bookpls');
    bookList.innerHTML = `<li>${book.title}</li>`
}