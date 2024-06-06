'use client'

import { add } from "@/libs/features/wishlist/wishListSlice"
import { AppStore, makeStore } from "@/libs/store"
import { ReactNode, useRef } from "react"
import { Provider } from "react-redux"

const StoreProvider = ({ children }: { children: ReactNode }) => {
   // const store = makeStore();

   const storeRef = useRef<AppStore>()

   if (!storeRef.current) {
      // Create the store instance the first time this renders
      storeRef.current = makeStore()
      // storeRef.current.dispatch(add("testid"))
   }
   return (
      <Provider store={storeRef.current}>{children}</Provider>
   )
}

export default StoreProvider