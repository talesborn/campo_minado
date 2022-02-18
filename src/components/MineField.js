import React from 'react';
import Field from './Field';
import {StyleSheet, View} from 'react-native';

export default props => {
    const rows = props.board.map((row,r)=>{
        const columns = row.map((field, c)=>{
            return <Field {...field} key={c} onOpen={()=>props.onOpenField(r, c)} onSelect={e => props.onSelectField(r,c)}/>
        });
        return <View key={r} style={styles.columnsContainer}>{columns}</View>;
    });
    return <View style={styles.container}>{rows}</View>;
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#EEE',
    },
    columnsContainer:{
        flexDirection: 'row',
    }
})
