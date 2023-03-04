import { MutableRefObject } from 'react'

/**
 *
 * @param target 拖拽 DOM 节点或者 Ref 对象
 * @param options
 * @returns
 */
export function useDrag(target: Element | MutableRefObject<Element | null>) {
  console.log(target)
}
