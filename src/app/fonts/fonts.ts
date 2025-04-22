import { Dancing_Script, Roboto} from "next/font/google"

const scriptFont = Dancing_Script({
  weight: ['400', '700', ],
  subsets: ['latin'],
})

const roboto = Roboto({
  weight: ['400', '700','100' ],
  subsets: ['latin'],
})
export  {
    scriptFont,
    roboto
}