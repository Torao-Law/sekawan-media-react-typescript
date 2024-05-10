import axios from 'axios'
import React from 'react'

const useOverview = () => {
  const findOverview = async () => {
    try {
      const { data } = await axios.get("https://api.npoint.io/d0d2460744ed7d50c040")

      return data
    } catch (error) {
      throw error
    }
  }
  return {
    findOverview
  }
}

export default useOverview