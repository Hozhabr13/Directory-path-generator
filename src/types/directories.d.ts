interface DirectoriesType {
  id: number
  name: type
  type: string
  children: []
}

interface DirectoriesProps {
  directories: DirectoriesType
  delFileOrDirectory: (id: number) => void
  addFile: (parentId: number, name: string) => void
  addDirectory: (parentId: number, name: string) => void
}

export { DirectoriesType, DirectoriesProps }
