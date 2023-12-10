import { createSharedPathnamesNavigation } from "next-intl/navigation"
import { LOCALES } from "./constants/enums"

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({
    locales: LOCALES,
  })
