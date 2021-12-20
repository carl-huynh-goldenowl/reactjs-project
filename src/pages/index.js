import loadable from "@loadable/component"

export const Homepage = loadable(() => import("./Homepage"))

export const SignInPage = loadable(() => import("./SignInPage"))

export const ProductDetailPage = loadable(() => import("./ProductDetailPage"))

export const AdminPage = loadable(() => import("./AdminPage"))

export const SignUpPage = loadable(() => import("./SignUpPage"))

export const AddNewProductPage = loadable(() => import("./AddNewProductPage"))

export const ProductListManagement = loadable(() =>
  import("./ProductListManagement")
)

export const ProductListPage = loadable(() => import("./ProductListPage"))
