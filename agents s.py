import pyautogui
import time

time.sleep(0.4)

agents = {

    "Phoenix": [(711, 1010), (957, 820)],
    "Raze": [(387, 752), (957, 820)],
    "Jett": [(1210, 914), (957, 820)],
    "Yoru": [(421, 742), (957, 820)],
    "Neon": [(419, 734), (957, 820)],
    "Reyna": [(413, 743), (957, 820)],
    "Sage": [(420, 741), (957, 820)],
    "Cypher": [(414, 747), (957, 820)],
    "Chamber": [(414, 746), (957, 820)],
    "Killjoy": [(414, 743), (957, 820)],
    "Omen": [(416, 739), (957, 820)],
    "Viper": [(419, 742), (957, 820)],
    "Brimstone": [(419, 743), (957, 820)],
    "Astra": [(418, 740), (957, 820)],
    "Harbor": [(416, 746), (957, 820)],
    "Sova": [(420, 741), (957, 820)],
    "Breach": [(415, 741), (957, 820)],
    "Skye": [(416, 743), (957, 820)],
    "KAY/O": [(414, 741), (957, 820)],
    "Fade": [(415, 743), (957, 820)]
}

print("Welcher Agent soll gewählt werden?")
for agent in agents:
    print("-", agent)

# Eingabe des Agentennamens durch den Benutzer
chosen_agent = input("Wen möchtest du spielen?: ")


if chosen_agent in agents:
    pyautogui.moveTo(agents[chosen_agent][0])
    pyautogui.click()
    pyautogui.moveTo(agents[chosen_agent][1])
    pyautogui.click()
else:
    print("Agent wurde nicht gefunden")
    time.sleep(10)


