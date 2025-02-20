import { useEffect } from "react";
import { Animated } from "react-native";

const FadeInView = (props) => {
    const fadeAnim = new Animated.Value(0); // Initial value for opacity: 0

    useEffect(() => {
        const fadeIn = () => {
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }).start(() => fadeOut());
        };

        const fadeOut = () => {
            Animated.timing(fadeAnim, {
                toValue: 0.5,
                duration: 1000,
                useNativeDriver: true,
            }).start(() => fadeIn());
        };

        fadeIn();
    }, [fadeAnim]);

    return (
        <Animated.View // Special animatable View
            style={{
                ...props.style,
                opacity: fadeAnim, // Bind opacity to animated value
            }}>
            {props.children}
        </Animated.View>
    );
};

export default FadeInView;