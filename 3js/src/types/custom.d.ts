declare module '*.gltf?url' {
  const src: string
  export default src
}

declare module '*.gltf' {
  const content: any
  export default content
} 