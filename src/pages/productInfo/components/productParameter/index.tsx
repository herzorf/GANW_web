interface PropsType {
    content?: string
}

const ProductParameter = ({ content }: PropsType) => {
    return (
        <div>
            {content}
        </div>
    )
}
export default ProductParameter