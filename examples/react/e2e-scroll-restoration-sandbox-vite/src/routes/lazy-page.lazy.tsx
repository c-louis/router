import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import { ScrollBlock } from './-components/scroll-block'

export const Route = createLazyFileRoute('/lazy-page')({
  component: Component,
})

function Component() {
  return (
    <div className="p-2">
      <h3>lazy-page</h3>
      <hr />
      <ScrollBlock />
    </div>
  )
}