interface ComponentSize {
    width: number;
    height: number;
}
declare const useComponentSize: () => [React.RefObject<HTMLDivElement>, ComponentSize];
export default useComponentSize;
