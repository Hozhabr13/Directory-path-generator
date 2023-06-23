import React, { useState } from 'react'
import Directories from '../components/directories'
import { DirectoriesType } from '../types/directories'

const Sidebar = () => {
  const [directories, setDirectories] = useState<DirectoriesType>(
    {
      id: 1,
      name: 'src',
      type: 'directory',
      children: []
    }
  )

  const delFileOrDirectory = (id: number) => {
    setDirectories((prevData: DirectoriesType) => {
      // Find the parent directory for the item to delete
      const findParent = (data: DirectoriesType, parentId: number): any => {
        if (data.id === parentId) {
          return data
        }
        for (const child of data?.children) {
          const parent = findParent(child, parentId)
          if (parent) {
            return parent
          }
        }
      }
      // Find the item to delete and its parent directory
      let itemToDelete: any
      let parent: any
      const findItemToDelete = (data: any): any => {
        for (const child of data?.children) {
          if (child.id === id) {
            itemToDelete = child
            break
          } else if (child.type === 'directory') {
            findItemToDelete(child)
          }
        }

        if (!itemToDelete) {
          parent = null
        } else {
          parent = findParent(prevData, itemToDelete.parentId)
        }
      }

      findItemToDelete(prevData)
      // Remove the item from its parent's list of children
      if (parent && itemToDelete) {
        const index = parent.children.findIndex((child: DirectoriesType) => child.id === id)
        parent.children.splice(index, 1)
      }

      return { ...prevData }
    })
  }

  const addFile = (parentId: number, name: any) => {
    setDirectories((prevData: any) => {
      // Find the parent directory for the new item
      const findParent = (data: DirectoriesType, parentId: number): any => {
        if (data.id === parentId) {
          return data
        }
        for (const child of data.children) {
          const parent = findParent(child, parentId)
          if (parent) {
            return parent
          }
        }
      }
      const parent = findParent(prevData, parentId)
      // Generate a unique ID for the new file
      const id = Date.now()
      // Create the new file object
      const newFile = {
        id,
        type: 'file',
        name,
        children: [],
        parentId: parent.id
      }
      // Add the new file to its parent's list of children
      parent.children.push(newFile)

      return { ...prevData }
    })
  }

  const addDirectory = (parentId: number, name: string) => {
    setDirectories((prevData: any) => {
      // Find the parent directory for the new item
      const findParent = (data: any, parentId: number): any => {
        if (data.id === parentId) {
          return data
        }
        for (const child of data?.children) {
          const parent = findParent(child, parentId)
          if (parent) {
            return parent
          }
        }
      }
      const parent = findParent(prevData, parentId)
      // Generate a unique ID for the new directory
      const id = Date.now()
      // Create the new directory object
      const newDirectory = {
        id,
        type: 'directory',
        name,
        parentId: parent.id,
        children: []
      }
      // Add the new directory to its parent's list of children
      parent.children.push(newDirectory)

      return { ...prevData }
    })
  }

  return (
    <>
          {

                <div className='sidebar'>
                    <Directories directories={directories} delFileOrDirectory={delFileOrDirectory} addFile={addFile} addDirectory={addDirectory} />
                </div>

        }
    </>

  )
}

export default Sidebar
