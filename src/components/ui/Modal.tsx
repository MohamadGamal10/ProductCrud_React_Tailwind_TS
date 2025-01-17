import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
// import Button from './Button'
import { ReactNode } from 'react'
// import { useState } from 'react'

interface IProps {
  isOpen: boolean,
  close: () => void,
  title: string,
  children: ReactNode
}

export default function Modal({ isOpen, close, title, children }: IProps) {

  return (
    <>
      {/* <Button
        onClick={open}
        className="rounded-md bg-black/20 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
      >
        Open dialog
      </Button> */}

      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none " onClose={close} __demoMode>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/30 backdrop-blur-sm">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-lg bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              {title && <DialogTitle as="h3" className="text-2xl font-semibold leading-6 text-indigo-500 capitalize mb-5 ">
                {title}
              </DialogTitle>}

              <div className="mt-4">
                <div>{children}</div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
