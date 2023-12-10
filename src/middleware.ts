import { LOCALES } from "@/constants/enums"
import createMiddleware from "next-intl/middleware"

export default createMiddleware({
  locales: LOCALES,
  defaultLocale: "vi",
})

export const config = {
  // * Match only internationalized pathnames
  matcher: ["/", "/(vi|en)/:path*"],
}
