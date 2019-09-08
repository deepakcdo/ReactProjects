export const updateObject = (oldstate, newProps) => {
    return{
        ...oldstate,
        ...newProps
    }
}