
Add an env file with these 2 fields:

DATABASE_URI=postgres://postgresuser:postgrespassword@127.0.0.1:5432/demo-tailwind-issue
PAYLOAD_SECRET=328a6f2a1b9ef7fa4dd6a8c1

run pnpm dev

see the home page at localhost:3000 is formatted

go to localhost:3000/admin

setup user and password

then see the top section above collections is all in tailwind columns

run pnpm build

run pnpm start

now do the same

see that the home page is formatted

see that the admin page isnt formatted
