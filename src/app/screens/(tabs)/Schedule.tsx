import { ScrollView, StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import colors from '@/app/config/colors';
import Header from '@/app/components/Header';
import { Calendar, DateData, LocaleConfig } from 'react-native-calendars';
import { useState } from 'react';
import FONT from '@/app/config/fonts';
import { Ionicons } from '@expo/vector-icons';

export default function Schedule() {
    const todayDate = new Date();
    const today: DateData = {
        dateString: todayDate.toISOString().split('T')[0],
        day: todayDate.getDate(),
        month: todayDate.getMonth() + 1,
        year: todayDate.getFullYear(),
        timestamp: todayDate.getTime(),
    };
    const [day, setDay] = useState<DateData>(today);

    const formatDate = (date: string) => {
        const [year, month, day] = date.split('-')
        return `${day}/${month}/${year}`
    }

    LocaleConfig.locales['br'] = {
        monthNames: [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro',
        ],
        monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
        dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
        today: 'Hoje',
    };

    LocaleConfig.defaultLocale = 'br';

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Header text="Agenda" />
                <Calendar
                    style={styles.calendar}
                    headerStyle={styles.calendarHeader}
                    theme={{
                        calendarBackground: 'transparent',
                        textSectionTitleColor: colors.white,
                        selectedDayTextColor: colors.white,
                        todayTextColor: colors.green[400],
                        dayTextColor: colors.black,
                        textDisabledColor: colors.green[100],
                        dotColor: colors.green[800],
                        selectedDotColor: colors.white,
                        arrowColor: colors.white,
                        monthTextColor: colors.white,
                        textMonthFontWeight: 'bold',
                        textDayFontWeight: '500',
                        textDayHeaderFontWeight: 'bold',
                        textDayFontSize: 16,
                        textMonthFontSize: 18,
                        textDayHeaderFontSize: 14,
                    }}
                    enableSwipeMonths={true}
                    onDayPress={setDay}
                    markedDates={
                        day && {
                            [day.dateString]: { selected: true, selectedColor: colors.green[400] },
                        }
                    }
                />
                <View style={styles.schedulesContainer}>
                    <Text style={styles.schedulesTitle}>Agendamentos da semana</Text>
                    <TouchableOpacity style={styles.schedule}>
                        <View style={styles.scheduleTextContainer}>
                            <Text style={styles.scheduleText}>Visita Familiar</Text>
                            <Text style={styles.scheduleText}>19/02</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.schedule}>
                        <View style={styles.scheduleTextContainer}>
                            <Text style={styles.scheduleText}>Visita Familiar</Text>
                            <Text style={styles.scheduleText}>19/02</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.schedule}>
                        <View style={styles.scheduleTextContainer}>
                            <Text style={styles.scheduleText}>Visita Familiar</Text>
                            <Text style={styles.scheduleText}>19/02</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.schedule}>
                        <View style={styles.scheduleTextContainer}>
                            <Text style={styles.scheduleText}>Visita Familiar</Text>
                            <Text style={styles.scheduleText}>19/02</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View style={styles.dayInputContainer}>
                <TextInput placeholder={"Agendar compromisso em " + formatDate(day.dateString)} style={styles.dayInput} />
                <TouchableOpacity>
                    <Ionicons name="add-circle" size={30} color={colors.green[800]}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.beige,
        flex: 1,
        width: '100%',
    },
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 80,
        paddingHorizontal: 28,
        paddingTop: 28,
    },
    calendar: {
        backgroundColor: 'transparent',
        marginVertical: 24,
        width: '100%',
    },
    calendarHeader: {
        backgroundColor: colors.green[800],
        borderBottomWidth: 2,
        borderBottomColor: colors.green[100],
        borderRadius: 8,
        paddingBottom: 4,
        marginBottom: 4,
    },
    schedulesContainer: {
        width: '100%',
        gap: 16,
    },
    schedulesTitle: {
        fontSize: 20,
        fontFamily: FONT.OXYGEN_BOLD,
        marginBottom: 8,
    },
    schedule: {
        backgroundColor: colors.green[100],
        borderRadius: 8,
    },
    scheduleTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    scheduleText: {
        fontSize: 18,
        fontFamily: FONT.OXYGEN_REGULAR,
    },
    dayInputContainer: {
        position: 'absolute',
        bottom: 10,
        borderWidth: 2,
        borderColor: colors.green[800],
        width: '90%',
        backgroundColor: colors.beige,
        borderRadius: 12,
        height: 52,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    dayInput: {
        width: '85%',
        fontSize: 16,
        fontFamily: FONT.OXYGEN_REGULAR
    }
});
