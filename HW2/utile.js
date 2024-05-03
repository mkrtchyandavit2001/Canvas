export const canvas = document.querySelector("canvas")
export const ctx = canvas.getContext("2d")

export const rand = (limit, start = 0) => {
    return start = Math.floor(Math.random() * (limit - start))
}

export const randColor = () => "#"+rand(0xffffff).toString(16)